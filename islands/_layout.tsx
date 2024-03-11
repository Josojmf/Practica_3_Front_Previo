import { PageProps } from "$fresh/server.ts";
import NavMenu from "./NavMenu.tsx";

const layout =(props:PageProps) => {
    const Component = props.Component;
    return (
        <html>
            <body>
                <NavMenu />
                <Component />
            </body>
        </html>
    )      
};

export default layout;
    