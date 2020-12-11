import { useLocation } from 'react-router-dom';

function Page2() {
    const query = new URLSearchParams(useLocation().search);

    return (
        <div className="row">
            <div className="col">
                <h1>Page 2</h1>
                <h2>{query.get('id')}</h2>
                <h2>{query.get('name')}</h2>
                <p>Donec sit amet malesuada diam. Donec nibh nibh, faucibus nec arcu in, mollis tincidunt nisl. Integer leo ligula, faucibus vel ante at, sollicitudin venenatis ex. Fusce eleifend nulla nec auctor viverra. Pellentesque quis ligula et mauris auctor laoreet at at urna. Cras fermentum pharetra lacus, nec vestibulum purus semper nec. Donec accumsan, enim ut tristique facilisis, purus nisi scelerisque tortor, vel euismod augue dui vel sapien. Suspendisse vehicula dolor quis sollicitudin blandit. Nunc mauris est, sagittis eget erat a, feugiat consectetur ligula. Integer orci mauris, volutpat volutpat molestie a, laoreet sed ipsum. Integer viverra tempor augue, sit amet sagittis velit lobortis pellentesque.</p>
            </div>
        </div>
    )
}

export default Page2;
