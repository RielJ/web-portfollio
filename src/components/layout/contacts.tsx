import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  useToast,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Button,
  Form,
  InputWithLabel,
  TextareaWithLabel,
} from '../ui'
import { Section } from '../section'
import styles from './contacts.module.scss'
import { cn } from '@/lib'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { useEmailSender } from '@/hooks'

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  subject: z.string().min(2, {
    message: 'Subject must be at least 2 characters.',
  }),
  email: z.string().email().min(5, {
    message: 'Email must be at least 5 characters.',
  }),
  message: z.any(),
})

const Contacts = () => {
  const { toast } = useToast()
  const { isLoading, sendEmail } = useEmailSender({})
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit({
    email,
    name,
    subject,
    message,
  }: z.infer<typeof contactFormSchema>) {
    try {
      const error = await sendEmail(email, name, subject, message)
      if (error !== null) {
        console.log(error)
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          variant: 'destructive',
        })
        return
      } else {
        toast({
          title: 'Success!',
          description: 'Your message has been sent.',
        })
      }
    } catch (err) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Section className="gap-[3rem]" id="contact">
      <div className="overflow-hidden w-full">
        <h1 className="heading ">Contact</h1>
      </div>
      <div className="grid grid-cols-5 w-full">
        <div className="col-span-5 space-y-5">
          <div className="flex justify-between">
            <div className="md:max-w-xl max-w-[15rem] text-left">
              Whether you&apos;re interested in working with me or just want to
              say hello, I&apos;d love to hear from you!
            </div>
            <div className="flex space-x-3 items-center">
              <a href="https://github.com/rielj" target="_blank">
                <GitHubLogoIcon className="w-6 h-6 cursor-pointer" />
              </a>

              <a href="https://linkedin.com/in/rielj" target="_blank">
                <LinkedInLogoIcon className="w-6 h-6 cursor-pointer" />
              </a>

              <a href="mailto: bulaybulay.rielj@gmail.com" target="_blank">
                <EnvelopeClosedIcon className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={cn(styles['contact-form'], 'flex flex-col space-y-5')}
            >
              <div className="grid grid-cols-2 w-full space-x-5">
                <div className="flex-1 space-y-5 col-span-1">
                  <div className={cn(styles['contact-input-group'])}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputWithLabel placeholder="Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className={cn(styles['contact-input-group'])}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputWithLabel placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className={cn(styles['contact-input-group'])}>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputWithLabel placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex-1 flex space-x-3 col-span-1">
                  <div
                    className={cn(
                      styles['contact-input-group'],
                      'w-full h-full'
                    )}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="h-full">
                          <FormControl>
                            <TextareaWithLabel
                              placeholder="Message"
                              className="h-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="h-fit" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                variant="secondary"
                className="mt-4"
                disabled={isLoading}
                isLoading={isLoading}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  )
}

export { Contacts }
