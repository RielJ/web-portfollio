type TNavLogoProps = {}

const NavLogo = ({}: TNavLogoProps) => {
  return (
    <div className="w-full font-logo">
      <a href="/#home" className="text-white">
        {/* <Image src="/logo.png" alt="RielJ Logo" width={50} height={50} /> */}
        <img src="/logo.png" alt="RielJ Logo" width={50} height={50} />
      </a>
    </div>
  )
}

export { NavLogo }
