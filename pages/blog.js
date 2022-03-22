import Todo from "../components/Core/Todo";
import WorkLayout from "../layout/WorkLayout";

const blog = () => {
    return (
        <WorkLayout>
            <Todo featureName="Blog" />
        </WorkLayout>
    );
}

export default blog;