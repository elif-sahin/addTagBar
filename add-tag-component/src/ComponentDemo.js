import { AddTagBar } from './AddTagBar/AddTagBar';
import { dropdownContent } from './constants/dropdownContent';
import './componentDemo.scss';

/**
 * Main App to show example of AddTagBar component.
 */
function App() {
  return (
    <div className="component-demo">
      <AddTagBar
        className="add-tag-component"
        maxTagNumber={5} width={800}
        tagOptionslist={dropdownContent.people.map((people) => people.name)}
        addTagText="+ Add Tag">
      </AddTagBar>
    </div>
  );
}

export default App;
