import Head from 'next/head'
import Header from '../components/Header'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <section className="bg-[#F8F9FA] ">
        <div className="py-4 pb-6 max-w-3xl m-auto">
          <div className="flex py-6 justify-between">
            <h2 className="text-lg text-gray-600">Start a new document</h2>
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="border-none"
            >
              <Icon name="more_vert" size="3xl"/>
            </Button>
          </div>
          <div>
            <img src="images/pju.png" className="h-52 w-40 border-2 rounded-sm cursor-pointer hover:border-blue-600"/>
            <p className="font-semibold text-sm ml-1 mt-2 text-gray-600">Blank</p>
          </div>
        </div>
      </section>


    </div>
  )
}
