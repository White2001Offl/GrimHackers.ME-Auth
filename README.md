# GrimHackers.ME-Auth

### This Auth will be helpful to our developers to Authenticate / Identify our Grimhackers users

## Auth API:-
`https://grimhackers.me/auth/verify?auth_code=<key>`

Where as `<key>` is the Auth Value

_**At Successful Request you get something like this**_

```json
{
    "status": "ok",
    "html": {
        "content": ""
    },
    "uid": 4023,
    "username": "White2001",
    "primarygroup": 2,
    "secondarygroup": [
        4,
        11,
        16,
        18
    ],
    "visitor": {
        "conversations_unread": "0",
        "alerts_unread": "0",
        "total_unread": "0"
    }
}
```
Note - `"primarygroup": 2,` is deafult for all members.

_**At Fail request you should get something like this**_
```json
{
    "status": "ok",
    "html": {
        "content": ""
    },
    "error": "No user exists",
    "visitor": {
        "conversations_unread": "0",
        "alerts_unread": "0",
        "total_unread": "0"
    }
}
```

## Usergroups
* 2 - Member
* 3 - Admin
* 4 - Moderator
* 5 - Inferno
* 6 - Pro
* 7 - Magneto
* 8 - Contributor
* 12 - Godly
* 13 - Army IG

**If you're willing to develop spefic targetted groups you can use this IDs to Authenticate.
As `"primarygroup": 2` is default on all users. you should track Secondary Group Data i.e., Array
`"secondarygroup": [
        4,
        11,
        16,
        18
    ],`
Check in that array if the specific Group is available or not**

**If the response is in HTML that means our AUTH/Site is Down. Don't Create any issues to this repository. Just wait for couple of hours**

### If you're facing any issues please let us know
`Telegram - @dylanwinchester`

`Discord - DylanWinchester#5760`
