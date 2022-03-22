import Todo from "../components/Core/Todo";
import WorkLayout from "../layout/WorkLayout";

const blog = () => {
    return (
        <WorkLayout>
            <Todo featureName="Call me" />
        </WorkLayout>
    );
}

export default blog;