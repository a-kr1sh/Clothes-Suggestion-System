import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Clothes Suggestion</h1>
        <UploadForm />
      </div>
    </div>
  );
}
