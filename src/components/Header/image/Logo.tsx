export type LogoProps = {
  width?: JSX.IntrinsicElements["svg"]["width"];
  height?: JSX.IntrinsicElements["svg"]["height"];
};

function Logo({ width = 287, height = 87 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 284 87"
      fill="none"
    >
      <path
        d="M197.416 65.748l-1.353 1.428c-.455.497-.693 1.196-.874 1.524.091 1.608.72 2.472 1.82 2.975 1.087.484 2.096.271 2.935-.559l4.12-4.166c.458-.48.724-1.021.798-1.562.109-.814-.192-1.637-.894-2.32-1.179-1.14-2.703-1.14-3.9.039l-2.652 2.641zm-1.921-.412l4.143-4.244c.464-.485.685-1.196.883-1.552-.13-1.563-.76-2.427-1.847-2.935-.997-.469-2.113-.248-2.929.57l-5.61 5.678-.068.068c-1.15 1.179-1.111 2.709.073 3.871 1.156 1.134 2.685 1.186 3.836.051l1.519-1.507zm-4.324-13.828l-6.075 6.147-.855.869c-.617.633-1.003 1.4-1.02 1.868-.022 2.06 1.287 3.222 2.907 3.041.913-.102 1.626-.569 2.244-1.197l.408-.405 6.148-6.253a5.06 5.06 0 0 0 1.122-1.868c.51-1.557-.573-3.081-2.205-3.251-1.07-.113-1.949.328-2.674 1.049zm-6.953 4.589l5.236-5.305c1.043-1.1.89-2.646-.226-3.703l-.255-.225 2.266.598.222.073.505 1.524c1.303-.514 2.493-.424 3.564.17a5.41 5.41 0 0 1 1.032.761c1.371 1.276 1.512 2.901 1.07 4.617 3.462.767 4.709 2.438 4.438 5.875 2.826.61 3.609 1.361 4.51 4.284.006.023.017.044.022.067.08.187.261.361.426.485 1.161.909 2.822.733 3.904-.383.794-.82.936-1.761.379-2.743a3.89 3.89 0 0 0-.492-.688l-6.545-7.281-.771-.875c.759.21 1.581.372 2.437.481l.328.04 6.42 7.151c.034.033.063.073.096.108.896.993 2.052 1.225 3.224.665 1.134-.536 1.82-1.626 1.542-2.823-.159-.683-.55-1.371-1.003-1.925l-.442-.518-2.477-2.731 1.871-.26.187-.028 1.191 1.292c.011.011.022.023.028.034.402.429.827.752 1.32.909.408.13.856.147 1.355.012 1.637-.441 2.447-2.021 1.988-3.482 4.438-1.135 9.282-2.783 14.79-5.035v.87 2.032h-.056a36.02 36.02 0 0 1-1.004 6.637c-3.892 15.662-18.099 27.265-35.024 27.265s-31.133-11.604-35.025-27.265c-.533-2.144-.873-4.356-1.003-6.637h-.058v-2.032-.807c.017-.006.034-.006.051-.012 3.99-.762 7.838-1.236 11.435-1.406.063 0 .125-.005.188-.005.788 1.095 1.661 2.139 2.583 3.161.335.372.691.722 1.055 1.1h.458l.323-.344 2.04-2.071 1.694-1.654c.08.006.159.017.239.023.731.073 1.467.175 2.204.288a2.74 2.74 0 0 0-.941.615l-3.093 3.053c-.034.034-.074.068-.103.108l-2.657 2.692c-.817.835-1.02 1.856-.499 2.929.192.401.431.733.737.998.52.458 1.235.717 2.226.751.277-.136.93-.288 1.338-.689l.752-.739zm91.356-8.125c.652 1.496.981 3.302.981 5.413 0 2.343-.408 4.533-1.225 6.57-.815 2.043-1.993 3.82-3.541 5.338s-3.463 2.716-5.729 3.584c-2.272.869-4.851 1.304-7.735 1.304-1.586 0-3.195-.163-4.839-.485a28.97 28.97 0 0 1-4.765-1.376c-1.536-.587-2.98-1.287-4.33-2.099s-2.527-1.716-3.524-2.715l3.49-5.497c.278-.39.647-.723 1.1-.987a2.82 2.82 0 0 1 1.484-.402c.697 0 1.401.221 2.113.662l2.409 1.46a19.89 19.89 0 0 0 3.088 1.463c1.167.439 2.539.66 4.125.66 2.136 0 3.803-.474 4.993-1.411 1.184-.937 1.779-2.426 1.779-4.47 0-1.179-.328-2.144-.981-2.883-.651-.745-1.507-1.36-2.561-1.845-1.06-.486-2.267-.915-3.615-1.287l-4.16-1.236a29.87 29.87 0 0 1-4.153-1.671c-.958-.468-1.841-1.038-2.652-1.721 5.253-1.016 10.387-1.597 15.09-1.349 3.921.208 7.531.705 10.75 1.349.992 1.01 1.79 2.217 2.408 3.633zm-119.129.565c.505 1.378.754 2.997.754 4.848 0 2.343-.408 4.533-1.218 6.57a15.41 15.41 0 0 1-3.547 5.338c-1.548 1.518-3.457 2.716-5.729 3.584s-4.845 1.304-7.735 1.304c-1.582 0-3.19-.163-4.834-.485a28.83 28.83 0 0 1-4.765-1.376 27.17 27.17 0 0 1-4.329-2.099c-1.355-.813-2.527-1.716-3.531-2.715l3.496-5.497c.278-.39.64-.723 1.099-.987a2.83 2.83 0 0 1 1.484-.402c.698 0 1.4.221 2.108.662l2.414 1.46c.896.531 1.921 1.022 3.089 1.463 1.162.439 2.539.66 4.119.66 2.142 0 3.808-.474 4.992-1.411 1.191-.937 1.786-2.426 1.786-4.47 0-1.179-.329-2.144-.981-2.884a6.81 6.81 0 0 0-1.155-1.038l12.483-2.524z"
        fill="#fdc30e"
      />
      <path
        d="M215.232 53.01l-5.525-6.027c-.363-.401-.703-.728-1.236-.293-.51.417-.498.846-.062 1.326l4.743 5.261.237.258.085.091.153.17 1.871-.26.187-.027-.226-.248-.227-.249zm-9.549.203l-.679-.751-.505-.548c-.368-.344-.832-.362-1.111.006-.136.175-.209.491-.186.756a.64.64 0 0 0 .061.282l.017.034a3.06 3.06 0 0 0 .221.355 17.42 17.42 0 0 0 2.437.481l.328.039-.288-.322-.295-.332zm-14.529-6.366c-1.309-2.387-4.47-3.053-6.579-1.292l-.141.118-.148.135-.272.26.238.023 2.204.288.749.124.901.174.867.187 2.266.598.222.073a3.57 3.57 0 0 0-.136-.344l-.171-.345zm44.143-16.621C231.404 14.565 217.198 2.96 200.272 2.96s-31.132 11.604-35.025 27.265a35.51 35.51 0 0 0-1.031 7.291h-.029v1.377 7.828.287.288c.017-.006.034-.006.051-.012 3.989-.762 7.837-1.236 11.435-1.406.063 0 .125-.005.187-.005-.068-.09-.13-.181-.198-.277l-.187-.271a21.61 21.61 0 0 1-1.955-3.426c-.503-1.112-.906-2.28-1.184-3.522a16.36 16.36 0 0 1-.165-.863c-.419-2.574-.118-5.074.771-7.291 1.706-4.301 5.604-7.557 10.715-8.307 3.231-.475 6.308-.248 9.227.688 1.932.615 3.79 1.546 5.57 2.793.102.068.193.147.379.294l-3.445 2.467c-4.012 2.878-8.296 5.248-12.739 7.331a7.08 7.08 0 0 1-.328.158 137.58 137.58 0 0 1-4.2 1.868l-.929.389c-.658.271-1.332.553-1.927.937-1.087.711-1.399 1.738-.917 2.698.146.294.367.575.663.841 1.139 1.027 2.561 1.473 4.034 1.744a14.05 14.05 0 0 0 3.276.215 13.84 13.84 0 0 0 4.777-1.147c2.776-1.202 5.621-2.189 8.602-2.76 3.043-.587 6.001-.277 8.924.683 2.714.898 5.486 1.287 8.341.841.233-.039.59.107.737.287l4.522 5.537 1.898 2.353.912 1.14a3.4 3.4 0 0 1 .312.468c.045.086.091.176.125.26s.067.175.095.265c4.438-1.135 9.282-2.783 14.79-5.035v-.304-.305-7.731-1.377h-.028c-.09-2.506-.447-4.944-1.031-7.292zm-17.074 14.888l-2.918-3.583.759-.232c.511-.153.861-.452.72-1.021-.147-.576-.561-.717-1.151-.604-1.456.288-2.913.592-4.38.745-1.973.208-3.921-.135-5.769-.795-4.743-1.699-9.435-1.417-14.11.192-1.818.627-3.615 1.332-5.406 2.037-1.218.469-2.431.75-3.649.824-1.485.101-2.981-.096-4.483-.598-.396-.136-.799-.294-1.139-.525-.323-.225-.566-.57-.844-.863.305-.265.572-.621.924-.779l5.445-2.393h.096v-.04c.023-.006.04-.017.057-.028l3.355-1.49c4.568-2.082 8.772-4.764 12.743-7.811 2.477-1.891 4.959-3.792 7.889-4.961a20.02 20.02 0 0 1 1.433-.52c3.944-1.293 7.99-1.439 11.996-.056 3.973 1.366 6.772 4.16 8.092 7.614.851 2.223 1.089 4.724.629 7.291-.159.898-.408 1.806-.737 2.709-1.048 2.856-2.623 5.401-4.652 7.67-.436.491-.855.993-1.353 1.569l-3.547-4.352zm37.256-16.059c1.084-.937 2.727-1.411 4.942-1.411 1.281 0 2.42.17 3.424.508.997.333 1.885.712 2.668 1.129l2.096 1.128c.618.339 1.191.508 1.729.508.607 0 1.099-.141 1.484-.418s.748-.694 1.1-1.253l2.929-5.463c-.906-.829-1.938-1.58-3.089-2.241a23 23 0 0 0-3.717-1.704c-1.325-.474-2.73-.835-4.209-1.078s-2.999-.367-4.557-.367c-2.793 0-5.276.423-7.44 1.27s-3.989 1.975-5.479 3.392-2.619 3.025-3.39 4.837c-.765 1.806-1.15 3.663-1.15 5.564 0 2.365.323 4.352.976 5.96.651 1.614 1.506 2.957 2.566 4.035l.424.412.539.474c5.253-1.016 10.387-1.597 15.09-1.349a75.35 75.35 0 0 1 10.75 1.349c-.046-.056-.103-.113-.159-.17a14.15 14.15 0 0 0-.595-.553 13.95 13.95 0 0 0-3.038-2.02 37.14 37.14 0 0 0-4.17-1.761 95.1 95.1 0 0 0-4.176-1.354c-1.36-.406-2.574-.852-3.626-1.338-1.061-.485-1.916-1.067-2.568-1.738s-.981-1.518-.981-2.539c.002-1.604.545-2.874 1.627-3.811zm-119.353 0c1.082-.937 2.73-1.411 4.941-1.411 1.28 0 2.42.17 3.423.508a17.19 17.19 0 0 1 2.674 1.129l2.091 1.128c.617.339 1.195.508 1.728.508.607 0 1.106-.141 1.485-.418.385-.276.752-.694 1.099-1.253l2.936-5.463a17.43 17.43 0 0 0-3.089-2.241c-1.151-.661-2.391-1.23-3.723-1.704a24.05 24.05 0 0 0-4.204-1.078 28.15 28.15 0 0 0-4.556-.367c-2.794 0-5.276.423-7.441 1.27s-3.995 1.975-5.485 3.392c-1.485 1.417-2.618 3.025-3.383 4.837-.771 1.806-1.156 3.663-1.156 5.564 0 2.365.329 4.352.981 5.96.652 1.614 1.506 2.957 2.567 4.035a13.08 13.08 0 0 0 3.615 2.607 29.64 29.64 0 0 0 4.154 1.671l4.154 1.236c1.354.372 2.555.801 3.615 1.288l.736.378.674.429 12.483-2.523a6.94 6.94 0 0 0-.209-.536c-.006-.012-.006-.018-.012-.029-.651-1.495-1.507-2.76-2.567-3.804a13.91 13.91 0 0 0-3.632-2.573 37.22 37.22 0 0 0-4.17-1.761l-4.177-1.355s-2.573-.852-3.632-1.337-1.916-1.067-2.567-1.738-.975-1.518-.975-2.539c.001-1.606.539-2.875 1.622-3.812z"
        fill="#1a3764"
      />
      <path
        d="M93.01 41.821l10.807 27.807H94.67c-1.026 0-1.853-.243-2.482-.717a4.49 4.49 0 0 1-1.428-1.823l-3.001-8.838H68.412l-3.003 8.838c-.261.649-.72 1.23-1.383 1.756-.664.519-1.484.784-2.46.784h-9.219l9.622-24.748 11.554-1.676-2.391 7.049h13.935l-2.714-7.986c3.63-.299 7.207-.468 10.657-.446zm-42.726 4.91v2.235c0 3.109-.505 5.959-1.519 8.555-1.008 2.596-2.458 4.837-4.346 6.712s-4.176 3.341-6.878 4.384-5.74 1.564-9.113 1.564c-3.4 0-6.448-.52-9.151-1.564s-4.992-2.506-6.879-4.384-3.326-4.116-4.329-6.712-1.503-5.446-1.503-8.555v-3.088c3.786.796 7.662 1.575 11.805 2.127v.926c0 1.784.225 3.38.679 4.78.452 1.406 1.11 2.597 1.972 3.584a8.5 8.5 0 0 0 3.162 2.263c1.247.519 2.658.779 4.243.779s2.998-.26 4.239-.779c1.247-.525 2.301-1.269 3.163-2.246s1.518-2.162 1.972-3.567.679-2.998.679-4.781v-.649c3.678-.372 7.656-.943 11.804-1.585z"
        fill="#fdc30e"
      />
      <path
        d="M92.789 41.25l-8.663-22.298H72.043L62.201 44.27l-.232.61 11.554-1.676.197-.587 2.092-6.168 1.115-3.132 1.117-3.928 1.19 3.877 1.117 3.11 1.812 5.34.188.553c3.631-.299 7.209-.469 10.658-.446l-.221-.571zM38.48 47.752v.564c3.678-.372 7.655-.943 11.803-1.586v-.575-27.203H38.48v28.8zM6.565 45.303v.575c3.786.796 7.662 1.575 11.805 2.127v-.57-28.483H6.565v26.351z"
        fill="#1a3764"
      />
    </svg>
  );
}

export default Logo;
