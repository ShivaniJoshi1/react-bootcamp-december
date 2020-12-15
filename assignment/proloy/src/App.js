import React from 'react';
import { connect } from 'react-redux';

import { loadItems, removeItems } from './store/actions';

import Card from './components/Card';
import Pagination from './components/Pagination';

const mapDispatchToProps = dispatch => {
  return {
    loadItems: () => dispatch(loadItems()),
    removeItems: () => dispatch(removeItems())
  };
};

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { allItems: this.props.items, currentItems: [], currentPage: null, totalPages: null }
  }

  onPageChanged = data => {
    const { allItems } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentItems = allItems.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentItems, totalPages });
  }

  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    const { allItems, currentItems, currentPage, totalPages } = this.state;

    const totalItems = allItems.length;

    const productRows = [...Array(Math.ceil(currentItems.length / 4))].map((row, idx) => currentItems.slice(idx * 4, idx * 4 + 4));

    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    const content = productRows.map((products, idx) => (
      <div className="row mb-3" key={idx}>
        { products.map((product, index) => {
          const key = (idx + 1) * (index + 1);
          return (
            <div className="col" key={key}>
              <Card
                itemName={product.item.name}
                description={product.item.description}
                itemImage={product.item.images.icon}
                rating={product.item.ratings}
                itemId={product.itemId} />
            </div>
          );
        })}
      </div>)
    );

    return (
      <React.Fragment>
        <div className="w-100 py-2 d-flex flex-row flex-wrap align-items-center justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <h2 className={headerClass}>
              <strong className="text-secondary">{totalItems}</strong> Items
              </h2>
            {currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                Page <span className="font-weight-bold">{currentPage}</span> / <span className="font-weight-bold">{totalPages}</span>
              </span>
            )}
          </div>

          <div className="d-flex flex-row py-4 align-items-center">
            <Pagination totalRecords={totalItems} pageLimit={12} pageNeighbours={1} onPageChanged={this.onPageChanged} />
          </div>
        </div>

        {content}
      </React.Fragment>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

