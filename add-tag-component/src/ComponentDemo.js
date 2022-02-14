import './componentDemo.scss';
import { AddTagBar } from './AddTagComponent/AddTagBar';
/*
<div className="component-demo">
      <AddTagBar className="add-tag-component" width={30} tagOptionList={["ali", "ata", "bak"]} addTagText="Add Tag"></AddTagBar>
    </div>*/
function App() {
  return (
    <div className="component-demo">
    <AddTagBar className="add-tag-component" width={30} tagOptionslist={["ali", "ata", "bak"]} addTagText="Add Tag"></AddTagBar>
  </div>
  );
}

export default App;
