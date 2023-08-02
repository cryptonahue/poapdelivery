import { API_URL } from "../constants/env";
import Page from "@/components/Page";
import Typography from "@mui/material/Typography";
import Spacing from "@/components/Spacing";
import { ItemCard } from "@/components/Card";
import { Fragment, useState } from "react";
import getData from "../services/getData";
import { Titles } from "@/components/Card";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import orderArrayByDate from "@/utils/orderByDate";
import Head from "next/head";

const Blog = ({ posts }) => {
  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(config),
    defaultValues,
  });

  const serialize = (data) => {
    const newList = new Set(data);
    return [...newList];
  };

  const [list, setList] = useState(posts);

  const categories = posts.map((row) => row.category.name); //Refectorizar este codigo

  let newListCategories = serialize(categories);

  const onSubmit = (data) => {
    const { title, category } = data;
    const formatTitle = title.toLowerCase();
    const formatCategory = newListCategories[category];

    const listResult =
      category.length === 0
        ? posts
        : posts.filter((row) => row.category.name === formatCategory);

    const newList = listResult.filter(
      (row) => row.title.toLowerCase().indexOf(formatTitle) != -1
    );

    setList(newList);
  };

  const clear = () => {
    setList(posts);
    reset();
  };

  return (
    <Page title="Blog - DeFi LATAM">
      <Head>
        <title>Comunidad DeFi LATAM</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d1527" />
        <meta
          data-rh="true"
          property="og:image"
          content="https://www.defilatam.com/_next/image?url=https%3A%2F%2Fbackend.defilatam.com%2Fuploads%2F854_480_b4de096ada.png&w=3840&q=75"
        />
        <meta property="og:title" content="Blogs" />
        <meta property="og:site_name" content="DeFi LATAM" />
        <meta
          property="og:description"
          content="Blog de la comunidad para la comunidad."
        />
        <meta property="og:type" content="home" />
        <meta
          property="og:image"
          content="https://backend.defilatam.com/uploads/De_Fi_LATAM_838fe333a8.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />

        <meta name="telegram:card" content="summary_large_image" />
        <meta name="telegram:title" content="Blogs" />
        <meta
          name="telegram:description"
          content="Blog de la comunidad para la comunidad."
        />
        <meta
          name="telegram:image"
          content="https://backend.defilatam.com/uploads/De_Fi_LATAM_838fe333a8.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs" />
        <meta
          name="twitter:description"
          content="Blog de la comunidad para la comunidad."
        />
        <meta
          name="twitter:image"
          content="https://backend.defilatam.com/uploads/De_Fi_LATAM_838fe333a8.png"
        />
      </Head>
      <div className="container_header_title">
        <div className="container-event-title">
          <h1 className="titulo-eventos">Blogs</h1>
          <div className="container-hr-title"></div>
        </div>
      </div>
      <form
        className="blog-form"
        onChange={handleSubmit(onSubmit)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="Filter__by-container">
          <Typography variant="h6">Filtrar por:</Typography>
          <div className="Filter__by-container">
            <input
              type="text"
              name="title"
              placeholder="Nombre..."
              {...register("title")}
              className="input"
            />
            <select {...register("category")} className="select">
              <option value="" selected disabled>
                Categoría
              </option>
              {newListCategories.map((name, index) => (
                <option key={index} value={index}>
                  {name}
                </option>
              ))}
            </select>
            <Button onClick={clear} type="button" color="inherit">
              Limpiar
            </Button>
          </div>
        </div>
      </form>
      <div className="Colum_Posts-vertical">
        {list && list.length > 0 ? (
          orderArrayByDate(list).map((item, row) => (
            <ItemCard key={item.id} to="blog" item={item} />
          ))
        ) : (
          <Typography>No hay artículos disponibles.</Typography>
        )}
      </div>
    </Page>
  );
};

export async function getServerSideProps() {
  let response = await getData(`${API_URL}/articles`);
  return {
    props: {
      posts: response,
    },
  };
}

export default Blog;
