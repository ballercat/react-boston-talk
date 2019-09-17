import { getStuff } from "service";

class App extends Component {
  // Get some stuff from our async service and re-render when done
  onClick = () =>
    getStuff({
      /* options */
    }).then(response => {
      this.setState({ results: response });
    });

  render() {
    /* render samples here */
  }
}
