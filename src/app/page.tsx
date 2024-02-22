import { db }from "@/db";
import Link from "next/link";


export default async function Home() {

  const snippets = db.snippet.findMany();

  const renderedSnippets = (await snippets).map((snippet)=> {
    return (
      <Link key={snippet.id} className="flex justify-between items-center p-2 border rounded mt-3"
      href={`/snippets/${snippet.id}`}>
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
    
  })
  return (
    <div>
      <div className="flex m-2 justify-between item-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>
    </div>
  );
}
