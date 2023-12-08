export default function CheckoutConfirmation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-md bg-white p-6 shadow-md">
        <img src="/images/logo.png" className="w-full pb-8" />
        <h1 className="mb-4 text-3xl font-bold">Thank you for your order!</h1>
        <p className="mb-4 text-lg">
          Your order #0001 has been successfully placed. We'll keep you updated
          via email with the order confirmation and when it's shipped.
        </p>
        <p className="text-sm text-gray-600">
          For any questions, please contact info@darlingdollcosmetics.com
        </p>
      </div>
    </div>
  );
}
