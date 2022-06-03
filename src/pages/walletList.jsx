import React from "react";
import Footer from "../components/footer";
import Wallet from "../components/wallet";
import "../styles/walletList.css";
import Header from '../components/header'

export default function WalletList() {
    return (
        <div className="wallet-list">
            <Header />
            <Wallet
                name="Bitcoin"
                walletData="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
            />
            <Wallet
                name="Ethereum"
                walletData="0x165CD37b4C644C2921454429E7F9358d18A45e14"
            />
            <Wallet
                name="USDT"
                walletData="TEFccmfQ38cZS1DTZVhsxKVDckA8Y6VfCy "
            />
            <Wallet
                name="Ministry of Defense"
                walletData="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
            />
            <Footer />
        </div>
    );
}
