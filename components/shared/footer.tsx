import Image from "next/image"
import Link from "next/link"


function Footer() {
  return (
    <footer className="border-t">
        <div className="wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
          <Link href="/" className="w-36">
            <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
          </Link>
          <p className="text-primary-500">© 2022. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer