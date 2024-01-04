import os
import boto3

def handler(event, context):
    client = boto3.client('cognito-idp')
    response = client.list_users(
        UserPoolId=os.environ['AUTH_NEXTAMPLIFIEDCC993D35_USERPOOLID']
    )
    users = sorted(list(map(convert_user, response['Users'])),
                   key=lambda user: user['email'])

    return users

def convert_user(raw_user):
    ret = {
        'email': None,
        'familyName': None,
        'givenName': None,
        'admin': False,
        'enabled': raw_user['Enabled'],
        'status': raw_user['UserStatus'],
    }

    for attr in raw_user['Attributes']:
        name = attr['Name']
        value = attr['Value']

        if name == 'email':
            ret['email'] = value
        elif name == 'family_name':
            ret['familyName'] = value
        elif name == 'given_name':
            ret['givenName'] = value
        elif name == 'profile':
            if 'admin' in value:
                ret['admin'] = True

    return ret