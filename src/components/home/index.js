import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div class={`${style.home} ui container`}>
        <div class="ui two column stackable grid">
          <div class={`${style.left_home_container} column`}>
            <img class="bot_avatar" src="/assets/images/bitpaper.jpg" alt=""/>
            <br />
            <br />
            <p class={`${style.home_caption}`}>Discord Bot for Crypto</p>
            <p class={`${style.home_sub_caption}`}>
              Manage wallets, Check prices, and HODL
            </p>
            <a class={`${style.call_to_action_btn} ui secondary large button`} href="https://discord.gg/Pz8Fq6" target="_blank">
              Add to Discord
            </a>
          </div>
          <div class="column">
            <img class="discord_session" src="/assets/images/discord_session.png" alt=""/>
          </div>
        </div>

        <br />
        <h3 class={`${style.home_header} ui horizontal divider header`}>
          Commands
        </h3>
        <br />

        <table class={`ui celled table ${style.command_list} `}>
          <thead>
            <tr class="six wide"><th>Command</th>
            <th class="six wide">Description</th>
            <th class="four wide">Example</th>
          </tr></thead>
          <tbody>
            <tr>
              <td><code>%help</code></td>
              <td>Show help</td>
              <td><code>%help </code></td>
            </tr>
            <tr>
              <td><code>%coininfo [symbol]</code></td>
              <td>Display important coin information such as their website, block explorers, forums</td>
              <td><code>%coininfo btc</code></td>
            </tr>
            <tr>
              <td><code>%convert [amount] [from_symbol] [to_symbol]</code></td>
              <td>Convert currency from one to another. Specific amounts must be given. </td>
              <td><code>%convert 100 btc lsk</code></td>
            </tr>
            <tr>
              <td><code>%genwallet [symbol]</code></td>
              <td>Create wallet for user where keys will be sent via Direct Message. Only supports BTC/ETH/LTC/XRP/BCH/XRB currently</td>
              <td><code>%genwallet eth </code></td>
            </tr>
            <tr>
              <td><code>%top [count]</code></td>
              <td>See the top cryptos by market cap. Limit results by passing count value. Max count is 25.</td>
              <td><code>%top 20</code></td>
            </tr>
            <tr>
              <td><code>%flippening</code></td>
              <td>Check flippening status</td>
              <td><code>%flippening</code></td>
            </tr>
            <tr>
              <td><code>%ping</code></td>
              <td>Tests the bot's ping time</td>
              <td><code>%ping </code></td>
            </tr>
            <tr>
              <td><code>%setprefix [newprefix]</code></td>
              <td>Sets the prefix for the server.</td>
              <td><code>%setprefix !</code></td>
            </tr>
            <tr>
              <td><code>%eval [code]</code></td>
              <td>Allows bot administrators to evaluate code to test the bot</td>
              <td><code>%eval 5 + 7</code></td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
};