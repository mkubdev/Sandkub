import WorkLayout from '../layout/WorkLayout';

const eddieApi = (props) => {
  return (
    <WorkLayout>
      <div className="flex flex-wrap w-full p-4 m-4 mx-auto">
        <ul>
          {props.data.map((project) => (
            <li key={project._id}> {JSON.stringify(project)} </li>
          ))}
        </ul>
      </div>
    </WorkLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const eddieHubData = await fetch('https://api.eddiehub.io/github');
  const data = await eddieHubData.json();
  return {
    props: {
      data: data,
    },
  };
};

export default eddieApi;
