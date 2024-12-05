const PhotoFeedLayout = ({
                             children,
                             modal
                         }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) => {
    return (
        <main>
            {modal}
            {children}
        </main>
    );
};

export default PhotoFeedLayout;