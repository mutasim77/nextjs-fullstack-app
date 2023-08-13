import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const data = [
  {
    _id: uuidv4(),
    id: 1,
    img: 'https://images.pexels.com/photos/13035386/pexels-photo-13035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'A White Goat',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis similique eum natus dolorum vel eos nulla molestiae, officia nostrum deleniti!'
  },
  {
    _id: uuidv4(),
    id: 2,
    img: 'https://images.pexels.com/photos/17823425/pexels-photo-17823425/free-photo-of-undersea-view-of-swimming-dolphins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Swimming Dolphins',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis similique eum natus dolorum vel eos nulla molestiae, officia nostrum deleniti!'
  },
  {
    _id: uuidv4(),
    id: 3,
    img: 'https://images.pexels.com/photos/17617944/pexels-photo-17617944/free-photo-of-barrilitos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Car',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis similique eum natus dolorum vel eos nulla molestiae, officia nostrum deleniti!'
  }
]

const Blog = async () => {
  // const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
