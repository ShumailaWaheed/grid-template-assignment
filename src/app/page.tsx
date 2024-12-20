import Head from "next/head";

// Component for rendering a grid layout
export default function GridLayout() {
  return (
    <>
      <Head>
        <title>Grid Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="grid 
                     grid-rows-[100px_1fr_100px]  
                     h-[calc(100vh-60px)] 
                     w-full 
                     gap-5 
                     lg:grid-cols-[250px_1fr_220px]
                     md:grid-cols-[150px_1fr_150px]
                     sm:grid-cols-[100px_1fr_100px]" 
        > 
          {/* Header, Navigation, Article, Ads, and Footer sections grids */}
          <div className="col-span-3 bg-yellow-300 flex items-start justify-start text-left p-4 text-xl font-bold">Header</div>
          <div className="row-span-2 bg-yellow-300 flex items-start justify-start text-left p-4 text-lg font-bold">Nav</div>
          <div className="bg-yellow-300 flex items-start justify-start text-left p-4 text-lg font-bold"> Article</div>
          <div className="col-span-1 bg-yellow-300 flex items-start justify-start text-left p-4 text-lg font-bold">Ads</div>
          <div className="col-span-2 bg-yellow-300 flex items-start justify-start text-left p-4 text-lg font-bold">Footer</div>
        </div>
      </div>
    </>
  );
}
