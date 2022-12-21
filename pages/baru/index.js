import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Link from 'next/link'

export default function Baru() {
    return (
        <div className="container mx-auto">
            <Header title="Baru" />
            <p className="mt-4">
                This is a new page.
            </p>
            <p className="mt-4">
                <Button className="bg-red-100" >
                <Link href='/'> Click me</Link>
                </Button>
            </p>
            <Footer />
        </div>
    )
}
