import style from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

interface ListProp {
  id: string,
  name: string,
  image: string,
};

const StoreItem = ({ id, image, name }: ListProp) => (
  <Link href={`/${id}`} >
    <div className={style.card}>
      <img src={image} alt={name} width="100%" />
      <h1>{name}</h1>
    </div>
  </Link>
)


export default StoreItem;