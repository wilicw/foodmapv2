import axios from 'axios';
import Image from 'next/image';

interface PageProps {
  name: string,
  address: string,
  image: string,
};

const Store = ({ name, address, image }: PageProps) => {
  return (
    <div>
      <img src={image} alt={name} width="50%"></img>
      <h1>{name}</h1>
      <p>{address}</p>
    </div>
  )
}

async function getServerSideProps({ params }: any) {
  const req = await axios.get(`${process.env.API_ROOT}/api/${params.id}`);

  if (req.status != 200) throw "Store not found.";

  const data = req.data;
  const props: PageProps = {
    name: data.name,
    address: data.address,
    image: data.image,
  }

  return {
    props: props
  }

}

export { getServerSideProps };
export default Store;