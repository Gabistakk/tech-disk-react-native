import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const ServicesButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={279}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={279} height={79.81} fill="#4B2785" rx={16} />
    <Path
      fill="#fff"
      d="M34.184 53.304c-1.61 0-2.976-.256-4.096-.768-1.11-.512-1.952-1.28-2.528-2.304-.576-1.035-.864-2.32-.864-3.856v-1.152h1.984v1.12c0 1.803.464 3.115 1.392 3.936.939.821 2.293 1.232 4.064 1.232 1.835 0 3.216-.347 4.144-1.04.928-.693 1.392-1.755 1.392-3.184 0-.992-.245-1.813-.736-2.464-.49-.661-1.179-1.216-2.064-1.664-.885-.448-1.92-.859-3.104-1.232-1.355-.437-2.55-.955-3.584-1.552-1.035-.608-1.845-1.355-2.432-2.24-.587-.885-.88-1.968-.88-3.248 0-1.248.293-2.299.88-3.152.587-.853 1.413-1.499 2.48-1.936 1.077-.437 2.336-.656 3.776-.656 1.536 0 2.859.24 3.968.72 1.12.47 1.979 1.19 2.576 2.16.597.96.896 2.181.896 3.664v1.296h-1.984v-1.216c0-1.728-.47-2.965-1.408-3.712-.928-.747-2.267-1.12-4.016-1.12-1.664 0-2.955.32-3.872.96-.907.64-1.36 1.637-1.36 2.992 0 1.003.267 1.835.8 2.496.544.661 1.28 1.221 2.208 1.68.928.459 1.984.885 3.168 1.28 1.397.459 2.592.976 3.584 1.552.992.565 1.75 1.275 2.272 2.128.523.843.784 1.904.784 3.184 0 1.28-.293 2.379-.88 3.296-.587.907-1.435 1.6-2.544 2.08-1.11.48-2.448.72-4.016.72Zm12.649-22.16.895-1.104v10.944l-.511-.704h9.488v1.76h-9.488l.511-.704V52.36l-.895-1.104H58.16V53H45.745V29.4H58.16v1.744H46.832Zm31.905 13.088c0 3.093-.694 5.381-2.08 6.864-1.376 1.472-3.302 2.208-5.776 2.208-2.475 0-4.406-.736-5.792-2.208-1.376-1.483-2.064-3.77-2.064-6.864V29.4h1.984V44.152c0 2.603.501 4.48 1.504 5.632 1.013 1.152 2.47 1.728 4.368 1.728 1.898 0 3.354-.576 4.368-1.728 1.013-1.152 1.52-3.03 1.52-5.632V29.4h1.968v14.832Zm11.633 9.072c-1.61 0-2.975-.256-4.096-.768-1.109-.512-1.952-1.28-2.528-2.304-.576-1.035-.864-2.32-.864-3.856v-1.152h1.985v1.12c0 1.803.464 3.115 1.392 3.936.938.821 2.293 1.232 4.063 1.232 1.835 0 3.217-.347 4.145-1.04.927-.693 1.391-1.755 1.391-3.184 0-.992-.245-1.813-.735-2.464-.491-.661-1.18-1.216-2.064-1.664-.886-.448-1.92-.859-3.105-1.232-1.354-.437-2.549-.955-3.584-1.552-1.034-.608-1.845-1.355-2.431-2.24-.587-.885-.88-1.968-.88-3.248 0-1.248.293-2.299.88-3.152.586-.853 1.413-1.499 2.48-1.936 1.077-.437 2.335-.656 3.775-.656 1.537 0 2.86.24 3.969.72 1.12.47 1.978 1.19 2.576 2.16.597.96.895 2.181.895 3.664v1.296h-1.984v-1.216c0-1.728-.469-2.965-1.407-3.712-.928-.747-2.267-1.12-4.016-1.12-1.664 0-2.955.32-3.872.96-.907.64-1.36 1.637-1.36 2.992 0 1.003.266 1.835.8 2.496.543.661 1.28 1.221 2.207 1.68.928.459 1.984.885 3.168 1.28 1.398.459 2.592.976 3.584 1.552.993.565 1.75 1.275 2.273 2.128.522.843.783 1.904.783 3.184 0 1.28-.293 2.379-.88 3.296-.586.907-1.434 1.6-2.543 2.08-1.11.48-2.449.72-4.017.72Zm26.313 0c-1.611 0-2.976-.256-4.096-.768-1.109-.512-1.952-1.28-2.528-2.304-.576-1.035-.864-2.32-.864-3.856v-1.152h1.984v1.12c0 1.803.464 3.115 1.392 3.936.939.821 2.293 1.232 4.064 1.232 1.835 0 3.216-.347 4.144-1.04.928-.693 1.392-1.755 1.392-3.184 0-.992-.245-1.813-.736-2.464-.491-.661-1.179-1.216-2.064-1.664-.885-.448-1.92-.859-3.104-1.232-1.355-.437-2.549-.955-3.584-1.552-1.035-.608-1.845-1.355-2.432-2.24-.587-.885-.88-1.968-.88-3.248 0-1.248.293-2.299.88-3.152.587-.853 1.413-1.499 2.48-1.936 1.077-.437 2.336-.656 3.776-.656 1.536 0 2.859.24 3.968.72 1.12.47 1.979 1.19 2.576 2.16.597.96.896 2.181.896 3.664v1.296h-1.984v-1.216c0-1.728-.469-2.965-1.408-3.712-.928-.747-2.267-1.12-4.016-1.12-1.664 0-2.955.32-3.872.96-.907.64-1.36 1.637-1.36 2.992 0 1.003.267 1.835.8 2.496.544.661 1.28 1.221 2.208 1.68.928.459 1.984.885 3.168 1.28 1.397.459 2.592.976 3.584 1.552.992.565 1.749 1.275 2.272 2.128.523.843.784 1.904.784 3.184 0 1.28-.293 2.379-.88 3.296-.587.907-1.435 1.6-2.544 2.08s-2.448.72-4.016.72Zm12.649-22.16.896-1.104v10.944l-.512-.704h9.488v1.76h-9.488l.512-.704V52.36l-.896-1.104h11.328V53h-12.416V29.4h12.416v1.744h-11.328ZM145.526 53V29.4h7.744c2.058 0 3.637.496 4.736 1.488 1.098.992 1.648 2.533 1.648 4.624 0 1.28-.24 
2.363-.72 3.248-.48.885-1.051 1.573-1.712 2.064-.662.48-1.264.752-1.808.816a4.653 4.653 0 0 1 1.664.464c.554.267 1.018.677 1.392 1.232.373.555.56 1.29.56 2.208v5.68c0 .437.032.821.096 1.152.074.32.149.528.224.624h-2c-.064-.107-.134-.315-.208-.624a5.963 5.963 0 0 1-.096-1.152v-5.408c0-1.13-.363-1.957-1.088-2.48-.715-.523-1.702-.784-2.96-.784h-6.112l.592-.768V53h-1.952Zm1.952-11.376-.592-.832h6.144c.832 0 1.594-.208 2.288-.624.693-.427 1.248-1.024 1.664-1.792.426-.768.64-1.67.64-2.704 0-1.621-.411-2.779-1.232-3.472-.822-.704-2.016-1.056-3.584-1.056h-5.968l.64-.864v11.344Zm21.055 11.536-6.624-23.76h2.176l5.936 22.176h-.176l5.888-22.176h2.176l-6.544 23.76h-2.832Zm13.108-.16V29.4h1.952V53h-1.952Zm23.633-8c0 .928-.171 1.877-.512 2.848a8.878 8.878 0 0 1-1.536 2.704c-.683.821-1.541 1.488-2.576 2-1.035.501-2.245.752-3.632.752-1.44 0-2.725-.293-3.856-.88-1.12-.587-2.069-1.419-2.848-2.496-.768-1.077-1.355-2.352-1.76-3.824-.405-1.483-.608-3.115-.608-4.896 0-1.792.203-3.424.608-4.896.405-1.472.992-2.741 1.76-3.808.779-1.077 1.728-1.904 2.848-2.48 1.131-.587 2.416-.88 3.856-.88 1.611 0 2.981.341 4.112 1.024 1.141.672 2.043 1.53 2.704 2.576.672 1.045 1.104 2.117 1.296 3.216.096.501.144.981.144 1.44h-1.984c0-.288-.027-.624-.08-1.008a6.69 6.69 0 0 0-.992-2.64 6.023 6.023 0 0 0-2.08-2.032c-.864-.523-1.904-.784-3.12-.784-1.419 0-2.656.405-3.712 1.216-1.056.8-1.877 1.963-2.464 3.488s-.88 3.381-.88 5.568c0 2.176.293 4.037.88 5.584.587 1.536 1.408 2.71 2.464 3.52 1.056.8 2.293 1.2 3.712 1.2 1.013 0 1.909-.192 2.688-.576a6.046 6.046 0 0 0 1.968-1.52 6.733 6.733 0 0 0 1.2-2.112A6.752 6.752 0 0 0 203.29 45h1.984Zm-7.136 9.824c.363 0 .699.08 1.008.24.32.16.581.405.784.736.203.33.304.763.304 1.296 0 .619-.165 1.13-.496 1.536a3.02 3.02 0 0 1-1.296.912 4.695 4.695 0 0 1-1.712.304 5.714 5.714 0 0 1-1.536-.192c-.459-.128-.763-.245-.912-.352l.464-.912c.128.085.373.197.736.336.373.139.821.208 1.344.208.661 0 1.216-.165 1.664-.496.459-.32.688-.779.688-1.376 0-.49-.128-.848-.384-1.072-.245-.224-.565-.336-.96-.336-.277 0-.565.053-.864.16-.299.117-.523.272-.672.464l-.944-.32 1.088-2.96h1.024l-.992 2.768-.16-.112c.096-.224.32-.421.672-.592.363-.16.747-.24 
1.152-.24Zm19.743-1.52c-1.344 0-2.576-.272-3.696-.816-1.12-.555-2.096-1.35-2.928-2.384-.822-1.045-1.462-2.32-1.92-3.824-.448-1.504-.672-3.205-.672-5.104 0-1.91.224-3.605.672-5.088.458-1.493 1.098-2.757 1.92-3.792.832-1.035 1.808-1.819 2.928-2.352 1.13-.533 2.362-.8 3.696-.8 1.344 0 2.576.267 3.696.8 1.13.533 2.106 1.317 2.928 2.352.832 1.035 1.472 2.299 1.92 3.792.458 1.483.688 3.179.688 5.088 0 1.899-.23 3.6-.688 5.104-.448 1.504-1.088 2.779-1.92 3.824-.822 1.035-1.798 1.83-2.928 2.384-1.12.544-2.352.816-3.696.816Zm0-1.792c1.418 0 2.666-.4 3.744-1.2 1.088-.8 1.936-1.968 2.544-3.504.618-1.536.928-3.413.928-5.632 0-2.23-.31-4.101-.928-5.616-.619-1.525-1.472-2.677-2.56-3.456-1.078-.779-2.32-1.168-3.728-1.168-1.398 0-2.64.39-3.728 1.168-1.088.779-1.942 1.93-2.56 3.456-.619 1.515-.928 3.387-.928 5.616 0 2.23.309 4.112.928 5.648.618 1.536 1.472 2.704 2.56 3.504 1.088.79 2.33 1.184 3.728 1.184Zm20.116 1.792c-1.611 0-2.976-.256-4.096-.768-1.11-.512-1.952-1.28-2.528-2.304-.576-1.035-.864-2.32-.864-3.856v-1.152h1.984v1.12c0 1.803.464 3.115 1.392 3.936.938.821 2.293 1.232 4.064 1.232 1.834 0 3.216-.347 4.144-1.04.928-.693 1.392-1.755 1.392-3.184 0-.992-.246-1.813-.736-2.464-.491-.661-1.179-1.216-2.064-1.664-.886-.448-1.92-.859-3.104-1.232-1.355-.437-2.55-.955-3.584-1.552-1.035-.608-1.846-1.355-2.432-2.24-.587-.885-.88-1.968-.88-3.248 0-1.248.293-2.299.88-3.152.586-.853 1.413-1.499 2.48-1.936 1.077-.437 2.336-.656 3.776-.656 1.536 0 2.858.24 3.968.72 1.12.47 1.978 1.19 2.576 2.16.597.96.895 2.181.895 3.664v1.296h-1.983v-1.216c0-1.728-.47-2.965-1.408-3.712-.928-.747-2.267-1.12-4.017-1.12-1.663 0-2.954.32-3.871.96-.907.64-1.36 1.637-1.36 2.992 0 1.003.266 1.835.8 2.496.544.661 1.28 1.221 2.208 1.68.928.459 1.984.885 3.168 1.28 1.397.459 2.592.976 
3.584 1.552.992.565 1.749 1.275 2.272 2.128.522.843.784 1.904.784 3.184 0 1.28-.294 2.379-.88 3.296-.587.907-1.435 1.6-2.544 2.08-1.11.48-2.448.72-4.016.72Z"
    />
  </Svg>
);
export default ServicesButton;