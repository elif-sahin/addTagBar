import './componentDemo.scss';
import { AddTagBar } from './AddTagComponent/AddTagBar';
import { dropdownContent } from './constants/dropdownContent';
/*
<div className="component-demo">
      <AddTagBar className="add-tag-component" width={30} tagOptionList={["ali", "ata", "bak"]} addTagText="Add Tag"></AddTagBar>
    </div>*/
function App() {
  return (
    <div className="component-demo">
    <AddTagBar className="add-tag-component" width={30} tagOptionslist={dropdownContent.people.map((people)=>people.name)} addTagText="+ Add Tag"></AddTagBar>
  </div>
  );
}

export default App;
