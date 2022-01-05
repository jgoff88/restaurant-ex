import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header></Header>
      <div>{children}</div>
    </div>
  );
}
Layout.defaultProps = {
  title: "Restaruant | Great Food",
  description: "A local restraunt with great food",
  keywords: "food, seafood, bbq, great food, service",
};
