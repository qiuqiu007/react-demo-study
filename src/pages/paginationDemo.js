import { Pagination } from 'antd';

export default class App extends React.Component {
  state = {
    current: 3,
    pageSize: 10
  };

  onChange = page => {
    // console.log(page);
    this.setState({
      current: page,
    });
  };
  onShowSizeChange = (current, pageSize) => {
    console.log(current + '|' + pageSize);
    this.setState({
      pageSize: pageSize,
    });
  };
  render() {
    return <Pagination showQuickJumper showSizeChanger current={this.state.current} pageSize={this.state.pageSize} pageSizeOptions={[10,20,40,50]} onChange={this.onChange} total={500} onShowSizeChange={this.onShowSizeChange}/>;
  }
}
