import { Route, Navigate, Routes } from "react-router-dom";

import {
  MailRegistPage1,
  MailRegistPage2,
  AccountRegistPage,
  StaffRegistPage,
  ShopRegistPage1,
  ShopRegistPage2,
  ServiceTermPage,
  PrivacyPolicyPage,
  LoginPage,
  ShopListPage,
  HomePage,
  NoticePage,
  WorkerPage,
  WorkerRatingPage,
  HiringListPage,
  HiringNewPage,
  HiringConformPage,
  HiringEndPage,
  UsageDetailPage,
  QRCodePage,
  MessagePage,
  MessageDetailPage,
  ModifyRequestPage,
  ModifyEndPage,
  ShopRatingPage,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path='/mailregist1' element={<MailRegistPage1 />} />
      <Route path='/mailregist2' element={<MailRegistPage2 />} />
      <Route path='/accountregist' element={<AccountRegistPage />} />
      <Route path='/staffregist' element={<StaffRegistPage />} />
      <Route path='/shopregist1' element={<ShopRegistPage1 />} />
      <Route path='/shopregist2' element={<ShopRegistPage2 />} />
      <Route path='/serviceterm' element={<ServiceTermPage />} />
      <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/shoplist' element={<ShopListPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/notice' element={<NoticePage />} />
      <Route path='/worker' element={<WorkerPage />} />
      <Route path='/workerrating' element={<WorkerRatingPage />} />
      <Route path='/hiringlist' element={<HiringListPage />} />
      <Route path='/hiringnew' element={<HiringNewPage />} />
      <Route path='/hiringconform' element={<HiringConformPage />} />
      <Route path='/hiringend' element={<HiringEndPage />} />
      <Route path='/usagedetail' element={<UsageDetailPage />} />
      <Route path='/qrcode' element={<QRCodePage />} />
      <Route path='/message' element={<MessagePage />} />
      <Route path='/messagedetail' element={<MessageDetailPage />} />
      <Route path='/modifyrequest' element={<ModifyRequestPage />} />
      <Route path='/modifyend' element={<ModifyEndPage />} />
      <Route path='/shoprating' element={<ShopRatingPage />} />
      <Route path='/*' element={<Navigate to='/mailregist1' replace />} />
      <Route element={<Navigate to='/mailregist1' replace />} />
    </Routes>
  );
}
