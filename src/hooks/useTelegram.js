const tg = window.Telegram.WebApp
const useTelegram = () => {
  const onToggleButton = () => {
    if(tg.MainButton.isVisible) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }
  const close = () => tg.close()
     
  return {tg, close, onToggleButton, query_id: tg.initDataUnsafe?.query_id, initDataUnsafe: tg.initDataUnsafe}
}

export default useTelegram