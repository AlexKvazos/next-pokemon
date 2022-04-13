import Header from "../components/Header";

export function Page({ name, age }) {
  return (
    <div>
      Your name is {name} and you are {age} years old export default
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Header />
      <h1>My about page</h1>
      <Page name="Alex" age={24} />
    </div>
  );
}
