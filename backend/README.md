
- [Devtinder API](#)
  - [Auth](#)
  - [Get Profile](#get-profile)
  - [Create Profile](#create-profile)
  - [Update Profile](#update-profile)
  - [Get User Timeline](#get-timeline)
  - [Get Activity](#get-activity)
  - [Create Connection With User](#create-connection)
  - [Reject User Profile](#get-activity)
  - [Reject Connection](#reject-connection)
  - [Accept Connection](#accept-connection)

### Auth(GET)

```js
fetch("http://localhost:5000/auth/github")
```

Output >>

```json
[
    {
          id: '826c2127-e884-415c-9068-4791ffd86052',
          first_name: null,
          last_name: null,
          __createdtime__: 1660758416888,
          __updatedtime__: 1660758416888
        
    },
    {...},
    ...
]
```

### Get profile(GET)

| Body    | Description         |
| ------------ | ------------------- |
|  userId | provide userId In request body |

```js
fetch("http://localhost:5000/profile")
```

Output >>

```json
{
  id: '557fc901-6e66-4f19-9e3b-c0b05c3ee468',
  bio: 'harperdb the goat ',
  city: 'NYC',
  country: 'Uk',
  gender: 'male',
  userId: 9000,
  __createdtime__: 1660758532358,
  __updatedtime__: 1660758748309
}
```

### Create Profile (POST)

| Body       | Description         |
| --------------- | ------------------- |
| data (object)  | provide a data object that contains the required properties       |


```js
fetch("http://localhost:5000/profile")

```



### Update Profile(PUT)


| Body       | Description         |
| --------------- | ------------------- |
| data (object)  | provide a data object that contains the properties you want to update       |

```js
fetch("http://localhost:5000/profile")
```


### Get User Timeline(GET)

| Body       | Description         |
| --------------- | ------------------- |
| preferences(array)  | provide an array with users preferences eg. skills , company interests       |

```js
fetch("http://localhost:5000/timeline")
```

Output >>

```json
[
	{
        "id": 9999,
        "first_name": "JackDaGoat",
        "last_name": "LastNamesForChumsps"
    }
    {...},
    ...
]
```

### Get Activity(GET)

| Body         | Description                           |
| ----------------- | ------------------------------------- |
| userId  | Provide a userId in request body |
```js
fetch("http://localhost:5000/interact/activity")
```

Output >>

```json
[
    {
        "actorId": 9000,
        "status": "PENDING",
        "first_name": "bob1",
        "last_name": "bobsurname"
    }
    {...},
    ...
]
```

#### Create Connection With User(POST)
| Body      | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| data (object) | provide object with properties (actorId and receiverId and status(default PENDING) |
```js
fetch("http://localhost:5000/interact/connect")
```

Output >>


### Reject User Profile(POST)

| Body      | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| data (object) | provide object with properties (actorId and receiverId) |

```js
fetch("http://localhost:5000/interact/rejection")
```



### Reject Connection (PUT)
```js
fetch("https://localhost:5000/interact/reject")
```

| Body      | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| data (object) | provide object ONLY status property (set value to REJECTED) |

#### Accept Connection (PUT)

```js
fetch("https://localhost:5000/interact/accept")
```
| Body      | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| data (object) | provide object ONLY status property (set value to ACCEPTED) |








