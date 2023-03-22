
/** SmallProject
 *
 * State: none
 * Props: data = {title, subtitle, image, link, github}
 *
 * App -> RouteList -> Projects -> SmallerProject
 *
 */
function SmallerProject({ title, goal, tech, github }) {
  return (
    <div class="card w-80 bg-gray-700 text-primary-content items-center">
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{tech}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-outline" href={github}>Github</button>
          </div>
        </div>
      </div>
  );
}

export default SmallerProject;