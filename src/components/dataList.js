import React from 'react';
import {connect} from 'react-redux';
import '../assets/css/dataList.css';
import {loadDataApi} from '../action/index';
import InfiniteScroll from 'react-infinite-scroller';
import {Thumbnail} from 'react-bootstrap';

class Datalist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /**
   * Function to lazy load the images
   */
  loadMore = () => {
    let length = this.props.dataReducer.data.length;
    if (!this.props.dataReducer.has_more_items) {
      this
        .props
        .dispatch(loadDataApi('lazyLoad', length, this.props.id));
    }
  }
  
  render() {
    return (
      <div>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadMore}
          hasMore={true}
          loader={< div className = "loader" key = {
          0
        } > Loading ........... </div>}>
          <div>
            {this
              .props
              .dataReducer
              .data
              .map((ele, index) => {
                return (
                  <Thumbnail key={index} src={ele.image} alt="data image">
                    <h3>{ele.title}</h3>
                    <p>{ele.company}</p>
                    <p>
                      <span>{ele.currency}&nbsp;{ele.price}</span>
                    </p>
                  </Thumbnail>
                )
              })
}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Datalist);