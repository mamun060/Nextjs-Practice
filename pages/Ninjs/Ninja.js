/* eslint-disable react/jsx-key */
import  Link  from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return {
        props: { raju: data}
    }
}

const Ninja = ({raju}) => {
  return (
        <div>
            {
                raju && raju.map( raj=> (
                <div>
                        <Link href={'/Ninja/' + raj.id} key={raj.id}>
                            <h4 className='ninjaTitle'>{raj.title}</h4>
                        </Link>
                        {/* <p> {raj.body} </p> */}
                </div>
                ))
            }
        </div>
  )
}

export default Ninja