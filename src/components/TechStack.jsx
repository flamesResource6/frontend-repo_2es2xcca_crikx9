import { motion } from 'framer-motion'

const techs = [
  'Python','FastAPI','PyTorch','TensorFlow','Transformers','YOLOv8','Docker','Redis','MLflow','DVC','W&B','GitHub Actions','Prometheus','Grafana','FAISS','LangChain','NeRF','ONNX'
]

export default function TechStack(){
  return (
    <section id="stack" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Tech Stack</h2>
        <div className="mt-8 overflow-hidden">
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="flex gap-3 pr-3"
            >
              {[...techs, ...techs].map((t, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200">
                  {t}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
