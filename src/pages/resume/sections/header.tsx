import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

type THeaderProps = {}

const Header = ({}: THeaderProps) => {
  return (
    <div className="relative mt-20">
      <div className="md:grid flex flex-col grid-cols-12 gap-10 w-full h-fit">
        <div className="col-span-7 bg-gray-100 text-black flex flex-col items-center justify-center">
          <div>
            <div className="text-2xl">RIEL JOSEPH BULAYBULAY</div>
            <div className="font-normal text-center md:text-left">
              SOFTWARE ENGINEER
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-3 gap-2 flex flex-col items-center md:items-start font-normal [&>*]:flex [&>*]:gap-4 [&>*]:items-center [&>*>div]:font-normal">
          <div>
            <i>
              <PersonIcon />
            </i>
            <div>+63 935 698 0527</div>
          </div>
          <a href="mailto: bulaybulay.rielj@gmail.com" target="_blank">
            <i>
              <EnvelopeClosedIcon />
            </i>
            <div>bulaybulay.rielj@gmail.com</div>
          </a>
          <a href="https://github.com/rielj" target="_blank">
            <i>
              <GitHubLogoIcon />
            </i>
            <div>https://github.com/rielj</div>
          </a>
          <a href="https://linkedin.com/in/rielj" target="_blank">
            <i>
              <LinkedInLogoIcon />
            </i>
            <div>https://linkedin.com/in/rielj</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export { Header }
