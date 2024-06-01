import sendGrid from '@sendgrid/mail'
import { useState } from 'react'

sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY || '')

console.log(import.meta.env)

type TUseEmailSenderProps = {}

export const useEmailSender = ({}: TUseEmailSenderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const sendEmail = async (
    from: string,
    name: string,
    subject: string,
    text: string
  ): Promise<Error | null> => {
    try {
      setIsLoading(true)
      await sendGrid.send({
        to: 'bulaybulay.rielj@gmail.com',
        from: 'bulaybulay.rielj@gmail.com',
        subject: `[Lead from website] : ${subject}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${name}, their email is: ✉️${from} </h3>
                <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${text}</p>
                  <br>
                </div>
              </div>
        </div>
      </body>
      </html>`,
      })
    } catch (e) {
      return new Error('There was an error sending the email')
    } finally {
      setIsLoading(false)
    }
    return null
  }
  return { sendEmail, isLoading }
}
