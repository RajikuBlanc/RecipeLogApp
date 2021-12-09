import Head from "next/head";
import CreateSeasoning from "../components/CreateSeasoning";
import CreateRecipe from "../components/CreateRecipe";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>RecipeApp</title>
      </Head>
      <h1 className="mb-2 font-bold text-2xl text-red-900">Hello Next!</h1>
      {/* <CreateSeasoning /> */}
      <CreateRecipe />
    </div>
  );
}
