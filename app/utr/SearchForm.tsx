import Form from "next/form";

export function SearchForm() {
  return (
    <Form action="/utr" className="flex gap-2 mb-8">
      <input
        type="text"
        name="q"
        placeholder="Search players..."
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </Form>
  );
}
