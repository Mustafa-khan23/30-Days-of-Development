# Sessions and Cookies

## Why They Exist
HTTP is **stateless**, meaning the server does not automatically remember previous requests. Sessions and cookies allow websites to recognize users across multiple requests.

## Cookie
A **cookie** is a small piece of data stored in the **browser**.

- Stored on the client (browser)
- Automatically sent with each request to the same website
- Often stores only a **Session ID**
- Can be viewed or deleted by the user

Example:
```text
sessionId=ABC123
```

## Session
A **session** is data stored on the **server**.

- Stored on the server
- Identified using a Session ID
- Keeps user login and other server-side information
- Expires after logout or inactivity

Example:

```text
Session ID    User
ABC123        Mustafa
XYZ456        Alice
```

## How They Work Together

1. User logs in.
2. Server verifies credentials.
3. Server creates a session.
4. Server sends a cookie containing the Session ID.
5. Browser stores the cookie.
6. Browser sends the cookie with future requests.
7. Server uses the Session ID to identify the user.

## Cookie vs Session

| Cookie | Session |
|--------|---------|
| Stored in the browser | Stored on the server |
| Small amount of data | Stores user-related data |
| Sent with every request | Retrieved using the Session ID |
| User can delete it | Managed by the server |

## Key Takeaways

- **Cookie = Stored in the browser**
- **Session = Stored on the server**
- **Cookie usually contains only the Session ID**
- **Server uses the Session ID to identify the user**
