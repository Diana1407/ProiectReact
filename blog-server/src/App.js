import PostsList from "./components/posts/PostsList";
import AddPostForm from "./components/posts/AddPostForm";
import SinglePostPage from "./components/posts/SinglePostPage";
import EditPostForm from "./components/posts/EditPostForm";
import UsersList from "./components/users/UsersList";
import UserPage from './components/users/UserPage';
import Layout from "./components/Layout";
import Public from "./components/Public";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<PostsList />} />

  //       <Route path="post">
  //         <Route index element={<AddPostForm />} />
  //         <Route path=":postId" element={<SinglePostPage />} />
  //         <Route path="edit/:postId" element={<EditPostForm />} />
  //       </Route>

  //       <Route path="user">
  //         <Route index element={<UsersList />} />
  //         <Route path=":userId" element={<UserPage />} />
  //       </Route>

  //       {/* Catch all - replace with 404 component if you want */}
  //       <Route path="*" element={<Navigate to="/" replace />} />

  //     </Route>
  //   </Routes>
  // );

  return (
    <Routes>
      <Route path="/" element={<Public />}>
        {/* Initial content on the Public page */}
      </Route>

      <Route path="/layout/*" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
