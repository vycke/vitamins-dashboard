import React from 'react';
import { AppContext } from 'component/context';
import PageHeader from 'component/pageHeader';

export default function HealthPage() {
  const { uploadFile } = React.useContext(AppContext);
  return (
    <>
      <PageHeader label="health analysis" file="crumbs" onUpload={uploadFile} />
    </>
  );
}
