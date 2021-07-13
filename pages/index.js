import Head from 'next/head'
import Header from '../components/Header'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon';
import Login from '../components/Login';
import {useSession} from 'next-auth/client'
export default function Home() {
  const [session] = useSession();
  if(!session){
    return <Login/>
  }
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <section className="bg-[#F8F9FA] py-6">
        <div className=" pb-6 max-w-3xl m-auto px-2">
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


      <section>
        <div className="max-w-3xl mx-auto py-8 px-2">
          <div className="flex justify-between items-center">
            <h2 className="flex-1 font-semibold text-gray-600 text-sm">My Documents</h2>
            <p className="px-10 text-gray-600 text-sm">Date Created</p>
            <Icon name="folder" size="3xl" color="gray"/>
          </div>
        </div>
      </section>


    </div>
  )
}
