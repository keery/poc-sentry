<p align='center'>
  <a href="https://sentry.io/">
    <img src="https://sentry.io/_assets/branding/png/sentry-horizontal-black-6aaf82e66456a21249eb5bef3d3e65754cadfd498f31469002bc603d966d08ef.png" />
  </a>
</p>

# Sentry POC 

## 💿 Installation :


``` bash
# Install dependencies
npm i

# Start application
npm run dev
```

## 🧾 Description :

A small application which emits errors to linked Sentry Account.  
It includes 3 routes :
- **/** = Home page
- **/error1** = First error
- **/error2** = Second error


## 👍 Pros
- By default it catches a lot of information about the user context who has encountered an error, and it's possible to add any information like current release, authenticated user, environment, or anything.  
- Function called breadcrumb trail which is which is a trail of events that allows to have complete and structured logs directly on Sentry.  
- Create teams that are linked to a project, main goal is to alert everyone when an error occurred.  
- Receive alerts directly by mail.  
- Possibility to create many projects to separate distinctly errors, for example both client and server.  
- Compatible and integrable with many different tools like Gitlab, Jira, Slack ...  
- Easy to plug  

## 👎 Cons:
- In trial version, long delay to receive emails.  

## 🚀 Useful links 

[Sentry Documentation](https://docs.sentry.io/error-reporting/quickstart/?platform=node)  
[Sentry Dashboard](https://sentry.io/settings/)
