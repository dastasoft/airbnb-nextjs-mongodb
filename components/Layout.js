import Footer from "@/components/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
