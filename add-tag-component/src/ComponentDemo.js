import { AddTagBar } from './AddTagComponent/AddTagBar';
import { dropdownContent } from './constants/dropdownContent';
import './componentDemo.scss';

/**
 * Main App to show example of AddTagBar component.
 */
function App() {
  return (
    <div className="component-demo">
      <AddTagBar className="add-tag-component" width={30} tagOptionslist={dropdownContent.people.map((people) => people.name)} addTagText="+ Add Tag"></AddTagBar>
    </div>
  );
}

export default App;
