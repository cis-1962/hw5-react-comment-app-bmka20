import CommentApp from './Components/CommentApp';

export default function App() {
  return (
    <main>
      <div className="container max-w-lg mx-auto mt-10">
        <h1 className="text-lg text-center">Brandon's Comment App</h1>
        <div className="container mx-auto mb-4">
          <CommentApp />
        </div>
      </div>
    </main>
  );
}
